package me.naiden.mypet.service;

import io.grpc.stub.StreamObserver;
import me.naiden.mypet.grpc.model.GetPetProjects;
import me.naiden.mypet.grpc.model.PetProject;

public interface PetProjectService {
	void getPetProjectsList(GetPetProjects request, StreamObserver<PetProject> responseObserver);
}
