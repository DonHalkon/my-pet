package me.naiden.mypet.service;

import me.naiden.mypet.model.PetProject;
import me.naiden.mypet.repository.PetProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PetProjectServiceImpl implements PetProjectService {

	@Autowired
	private PetProjectRepository petProjectRepository;

	@Override
	public List<PetProject> getPetProjectsList() {
		List<PetProject> petProjects = new ArrayList<>();
		petProjectRepository.findAll().forEach(petProjects::add);
		return petProjects;
	}

	@Override
	public PetProject getPetProjectByName(String petProjectName) {
		return petProjectRepository.findByName(petProjectName);
	}
}
