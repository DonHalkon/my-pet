package me.naiden.mypet.controller;

import me.naiden.mypet.model.PetProject;
import me.naiden.mypet.service.PetProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path = "/pet-project")
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
