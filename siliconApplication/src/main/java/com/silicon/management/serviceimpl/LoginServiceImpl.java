package com.silicon.management.serviceimpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.silicon.management.model.Login;
import com.silicon.management.repository.UserRepository;
import com.silicon.management.service.LoginService;



@Service
public class LoginServiceImpl implements LoginService {

	 @Autowired
	    private UserRepository userRepository;
	@Override
	public Optional<Login> findByUsername(String username) {
		// TODO Auto-generated method stub
		 return userRepository.findByUsername(username);
	}

}
