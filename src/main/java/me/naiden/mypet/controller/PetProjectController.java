package me.naiden.mypet.controller;

import me.naiden.mypet.model.PetProject;
import me.naiden.mypet.service.PetProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@Controller
@RequestMapping(path = "/api/v1/pet-projects")
public class PetProjectController {

	private final PetProjectService petProjectService;

	@Autowired
	public PetProjectController(PetProjectService petProjectService) {
		this.petProjectService = petProjectService;
	}

	@GetMapping
	@ResponseBody
	public List<PetProject> getPetProjects() {
		return petProjectService.getPetProjectsList();
	}

	@GetMapping("/{petProjectName}")
	@ResponseBody
	public PetProject getPetProjectByName(@PathVariable String petProjectName) {
		return petProjectService.getPetProjectByName(petProjectName);
	}
}
