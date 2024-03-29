package com.auric.spring.auric.Controller;


import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;

import com.auric.spring.auric.Config.JwtUtil;
import com.auric.spring.auric.Service.CustomUserDetailsService;
import com.auric.spring.auric.entity.AuthenticationRequest;
import com.auric.spring.auric.entity.AuthenticationResponse;
import com.auric.spring.auric.entity.UserDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



import io.jsonwebtoken.impl.DefaultClaims;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AuthenticationController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private CustomUserDetailsService userDetailsService;

	@Autowired
	private JwtUtil jwtUtil;

	//@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
			throws Exception {
		System.out.println("=========0");
		
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getUsername(), authenticationRequest.getPassword()));
			System.out.println("=========00");
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		}
		catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
		System.out.println("=========1");
		UserDetails userdetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		System.out.println("=========2");
		
		String token = jwtUtil.generateToken(userdetails);
		System.out.println("=========3");
		  
		AuthenticationResponse auth = new AuthenticationResponse();
		auth.setToken(token);
		
		System.out.println("roles..." + userdetails.getAuthorities().toArray()[0].toString());
		
		String[] rle = new String[userdetails.getAuthorities().toArray().length];
		for(int i=0;i<userdetails.getAuthorities().toArray().length;i++) {
			rle[i] =  userdetails.getAuthorities().toArray()[i].toString();
		}
		
		auth.setRoles(rle);

		return ResponseEntity.ok(auth);
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		System.out.println(user.getUsername());
		return ResponseEntity.ok(userDetailsService.save(user));
	}
	
	@RequestMapping(value = "/refreshtoken", method = RequestMethod.POST)
	public ResponseEntity<?> refreshtoken(HttpServletRequest request) throws Exception {
		System.out.println("==============RefreshToken===");
		// From the HttpRequest get the claims
		DefaultClaims claims = (io.jsonwebtoken.impl.DefaultClaims) request.getAttribute("claims");
		//System.out.println("==token==" + request.getAttribute("authorization"));
		//getClaimsFromJWT
		System.out.println("====================Claims in RT is.." + request.getAttribute("claims"));
		Map<String, Object> expectedMap = getMapFromIoJsonwebtokenClaims(claims);
		String token = jwtUtil.doGenerateRefreshToken(expectedMap, expectedMap.get("sub").toString());
		return ResponseEntity.ok(new AuthenticationResponse(token));
	}

	public Map<String, Object> getMapFromIoJsonwebtokenClaims(DefaultClaims claims) {
		Map<String, Object> expectedMap = new HashMap<String, Object>();
		for (Entry<String, Object> entry : claims.entrySet()) {
			expectedMap.put(entry.getKey(), entry.getValue());
		}
		return expectedMap;
	}


}
	// // @RequestMapping(value = "/get", method = RequestMethod.GET)
	// public ResponseEntity<?> refreshtoken() throws Exception {
		// 
	// // 	return new ResponseEntity<>(userDetailsService.findAllUser(),HttpStatus.OK);
	// }
