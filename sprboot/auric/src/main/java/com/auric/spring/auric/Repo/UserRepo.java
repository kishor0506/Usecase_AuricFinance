package com.auric.spring.auric.Repo;
import java.util.List;
import java.util.Optional;
import com.auric.spring.auric.entity.UserRegister;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserRegister,Long>{

   
}
