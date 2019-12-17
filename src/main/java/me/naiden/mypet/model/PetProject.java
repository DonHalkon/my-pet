package me.naiden.mypet.model;

import javax.persistence.Column;
//import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
//	@ElementCollection
	private String tests;

	public PetProject() {}

	public PetProject(Long id, String name, String description, String shortDescription, String task, String tests) {
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

	public String getTests() {
		return tests;
	}

	public void setTests(String tests) {
		this.tests = tests;
	}

	public me.naiden.mypet.grpc.model.PetProject toGRPC() {
		me.naiden.mypet.grpc.model.PetProject.Builder builder = me.naiden.mypet.grpc.model.PetProject.newBuilder();
		builder
				.setName(this.name)
				.setDescription(this.description)
				.setShortDescription(this.shortDescription)
				.setTask(this.task)
		        .setTests(this.tests);
//		for (int i = 0; i < this.tests.size(); i++) {
//			builder.setTests(i, this.tests.get(i));
//		}
		return builder.build();
	}
}
