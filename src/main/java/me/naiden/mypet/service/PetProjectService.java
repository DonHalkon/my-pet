package me.naiden.mypet.service;

import me.naiden.mypet.model.PetProject;

import java.util.List;

public interface PetProjectService {
	List<PetProject> getPetProjectsList();
	PetProject getPetProjectByName(String petProjectName);
}
