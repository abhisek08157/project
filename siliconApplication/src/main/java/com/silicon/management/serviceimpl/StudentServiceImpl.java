package com.silicon.management.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.silicon.management.model.Student;
import com.silicon.management.repository.StudentRepository;
import com.silicon.management.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {
	@Autowired
	StudentRepository studentRepository;

	@Override
	public void addStudent(Student st) {
		// TODO Auto-generated method stub
		// VAlidation
		// write some technique which will save the data in database
		studentRepository.save(st);

	}

	@Override
	public List<Student> fetchStudent() {
		// TODO Auto-generated method stub
		List<Student> student = studentRepository.findAll();
		return student;
	}

	/**
	 * update student logic
	 */
	@Override
	public void updateStudent(Student student) {
		// TODO Auto-generated method stub
		// fetch from database with id ,to check if student exist or not
		Optional<Student> optionalStudent = studentRepository.findById(student.getId());

		// if exist ,save method will be called
		if (optionalStudent.isPresent()) {
			studentRepository.save(student);

		}
		// else through exception
		else {
			throw new RuntimeException("Data not found");
		}

	}

	@Override
	public void deleteStudent(Long id) {
		// TODO Auto-generated method stub
		
		boolean idExist = studentRepository.existsById(id);		 
		 
		if (idExist) {

			studentRepository.deleteById(id);

		}
		 else {
			 throw new RuntimeException("data not found");
		 }
	}
	

}
