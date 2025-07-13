package com.silicon.management.service;

import java.util.Optional;

import com.silicon.management.model.Login;

public interface LoginService {
	Optional<Login> findByUsername(String username);
	}


