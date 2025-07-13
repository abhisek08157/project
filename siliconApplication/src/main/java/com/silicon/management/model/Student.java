package com.silicon.management.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")

public class Student {

	@Schema(description = "Auto-generated ID of the student", accessMode = Schema.AccessMode.READ_ONLY)

	@Id

	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Long id;
	@Schema(description = "The name of student",example="Abhisek")
	@Column(name = "name")
	private String name;
	private int age;
	private String email;
	
//	public Student(long id, String name, int age,String email) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.age = age;
//		this.email = email;
//	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

}
