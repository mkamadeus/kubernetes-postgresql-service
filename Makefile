commands : create-cluster
.PHONY: commands

create-cluster:
	kind create cluster

setup-helm:
	helm repo add bitnami https://charts.bitnami.com/bitnami

deploy-postgresql:
	helm install postgresql-release bitnami/postgresql

access-postgresql:
# Get password
	export POSTGRES_PASSWORD=$(shell kubectl get secret --namespace default my-release-postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode)
# Access psql inside cluster
	kubectl run my-release-postgresql-client \
		--rm --tty -i \
		--restart='Never' \
		--namespace default \
		--image docker.io/bitnami/postgresql:11.12.0-debian-10-r38 \
		--env="PGPASSWORD=$POSTGRES_PASSWORD" \
		--command -- psql --host my-release-postgresql -U postgres -d postgres -p 5432