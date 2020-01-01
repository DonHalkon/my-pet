package me.naiden.mypet.model;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Entity
public class PetProject {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
    @Column
	private String name;
	@Column
	private String description;
	@Column
	private String shortDescription;
	@Column
	private String task;
	@Column
	@ElementCollection
	private List<String> tests;

	public PetProject() {}

	public PetProject(Long id, String name, String description, String shortDescription, String task, List<String> tests) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.shortDescription = shortDescription;
		this.task = task;
		this.tests = tests;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getShortDescription() {
		return shortDescription;
	}

	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public List<String> getTests() {
		return tests;
	}

	public void setTests(List<String> tests) {
		this.tests = tests;
	}

}
