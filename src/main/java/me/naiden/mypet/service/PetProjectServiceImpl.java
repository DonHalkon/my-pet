package me.naiden.mypet.service;

import io.grpc.stub.StreamObserver;
import me.naiden.mypet.grpc.model.GetPetProjects;
import me.naiden.mypet.grpc.model.PetProject;
import me.naiden.mypet.grpc.model.PetProjectServiceGrpc;
import me.naiden.mypet.repository.PetProjectRepository;
import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.factory.annotation.Autowired;


@GRpcService
public class PetProjectServiceImpl extends PetProjectServiceGrpc.PetProjectServiceImplBase implements PetProjectService {

	@Autowired
	private PetProjectRepository petProjectRepository;

	@Override
	public void getPetProjectsList(GetPetProjects request, StreamObserver<PetProject> responseObserver) {
		petProjectRepository.findAll().forEach(petProject -> responseObserver.onNext(petProject.toGRPC()));
		responseObserver.onCompleted();
	}
}
