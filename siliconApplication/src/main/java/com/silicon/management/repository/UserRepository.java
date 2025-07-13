package com.silicon.management.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.silicon.management.model.Login;

@Repository

public interface UserRepository  extends JpaRepository<Login, Long> {
	 Optional<Login> findByUsername(String username);
}
