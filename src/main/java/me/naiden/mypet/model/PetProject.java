package me.naiden.mypet.model;

import me.naiden.mypet.model.validation.Validation;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "PET_PROJECTS")
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
	private List<String> examples;
	@Column
	@ElementCollection
	private List<Validation> validations;

	public PetProject() {}

	public PetProject(Long id, String name, String description, String shortDescription, String task, List<Validation> validations, List<String> examples) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.shortDescription = shortDescription;
		this.task = task;
		this.validations = validations;
		this.examples = examples;
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

	public List<Validation> getValidations() {
		return validations;
	}

	public void setValidations(List<Validation> validations) {
		this.validations = validations;
	}

	public List<String> getExamples() {
		return examples;
	}

	public void setExamples(List<String> examples) {
		this.examples = examples;
	}
}
