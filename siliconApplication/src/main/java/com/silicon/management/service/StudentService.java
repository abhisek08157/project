package com.silicon.management.service;

import java.util.List;

import com.silicon.management.model.Student;

public interface StudentService {
	/**
	 * @param st
	 */
	public void addStudent(Student st);
	public List<Student> fetchStudent();
/**
 * update student method
 * @param student
 */
public void updateStudent(Student student);
/**
 * delete student
 * @param id
 */
public void deleteStudent(Long id);
}
