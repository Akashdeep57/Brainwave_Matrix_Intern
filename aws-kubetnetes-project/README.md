# aws-kubernetes-project
 
# Overview
This project demonstrates how to deploy a web application using Docker and Kubernetes on AWS. The application is containerized using Docker, stored in AWS Elastic Container Registry (ECR), and deployed to a Kubernetes cluster on AWS Elastic Kubernetes Service (EKS).

# Table of Contents
•	Prerequisites
•	Project Structure
•	Setup Instructions
o	1. Set Up AWS Environment
o	2. Create Kubernetes Cluster
o	3. Containerize Your Web Application
o	4. Push Docker Image to AWS ECR
o	5. Deploy to Kubernetes Cluster
o	6. Monitor and Scale the Application
•	Verification
•	Troubleshooting
•	License
# Prerequisites
Before you begin, ensure you have the following installed and configured:
•	AWS CLI
•	kubectl
•	eksctl
•	Docker
•	An AWS account
# Project Structure
aws-kubernetes-project/
│
├── Dockerfile                 # Dockerfile for the web application
├── deployment.yaml            # Kubernetes Deployment and Service configuration
├── .gitignore                 # Files to ignore in Git
└── README.md                  # Project documentation
# Setup Instructions
# 1. Set Up AWS Environment
•	Create an AWS Account if don’t have one.
•	Install AWS CLI by downloading and installing it.
•	Configure AWS CLI by running aws configure and entering AWS credentials.
# 2. Create Kubernetes Cluster
•	Install eksctl.
•	Create the cluster with the command: eksctl create cluster --name my-cluster --region us-west-2 --nodes 3 --node-type t3.medium.
can choose region not only us-west-2 but can choose any region on which region performing this task.
•	Verify the cluster by running: kubectl get nodes.
# 3. Containerize Your Web Application
•	Ensure your 'Dockerfile' is in the project root.
•	Build the Docker image using: docker build -t my-web-app ..
•	Test the image locally with: docker run -p 8080:8080 my-web-app.
# 4. Push Docker Image to AWS ECR
•	Create an ECR repository with: aws ecr create-repository --repository-name my-web-app.
•	Authenticate Docker to ECR using: aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin <your-account-id>.dkr.ecr.us-west-2.amazonaws.com.
here also region should be same as in which region kubernetes cluster was created.
•	Tag and push the Docker image using: docker tag my-web-app:latest <your-account-id>.dkr.ecr.us-west-2.amazonaws.com/my-web-app:latest and docker push <your-account-id>.dkr.ecr.us-west-2.amazonaws.com/my-web-app:latest.
replace us-west-2 with the region on which up to now previous task was performed for this project.
# 5. Deploy to Kubernetes Cluster
•	Ensure the image path in 'deployment.yaml' points to ECR image.
•	Deploy the application using: kubectl apply -f deployment.yaml.
•	Get the external IP of service by running: kubectl get services my-web-app-service.
•	Access the application by navigating to the external IP in web browser.
# 6. Monitor and Scale the Application
•	Monitor the pods with: kubectl get pods.
•	View the logs of a specific pod using: kubectl logs <pod-name>.
•	Scale the deployment by running: kubectl scale deployment my-web-app --replicas=5.

