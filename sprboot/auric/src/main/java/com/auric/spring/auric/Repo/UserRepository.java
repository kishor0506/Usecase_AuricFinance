package com.auric.spring.auric.Repo;




import java.util.List;

import com.auric.spring.auric.entity.DAOUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<DAOUser, Long> {
	DAOUser findByUsername(String username);

	public List<DAOUser> findAll();
}
