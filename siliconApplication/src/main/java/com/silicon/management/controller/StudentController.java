package com.silicon.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.silicon.management.model.Student;
import com.silicon.management.service.StudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
	@Autowired // Dependency injection
	StudentService studentService;

	/**
	 * @param student
	 * @return adds the student details
	 */
	@PostMapping("/addStudent")
	public String addStudent(@RequestBody Student student) {
		studentService.addStudent(student);
		return "Added Successfully";
	}

	/**
	 * @return the student details
	 */
	@GetMapping("/findAllStudent")
	public List<Student> getStudent() {
		List<Student> students = studentService.fetchStudent();
		return students;
	}
	
	@PutMapping("/updateStudent")
	public String updateStudent(@RequestBody Student student) {
		
		studentService.updateStudent(student);
		return "Data updated successfully";
	}

	@DeleteMapping("/deleteStudent/{id}")
	public String deleteStudent(@PathVariable Long id) {
		
		studentService.deleteStudent(id);
		return "Data updated successfully";
	}

}
