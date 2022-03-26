Instalar do [site official](https://docs.docker.com/engine/install/ubuntu/)

## Passos para instalar

1. `sudo apt-get update`
2. ```sudo apt-get install \
   apt-transport-https \
   ca-certificates \
   curl \
   gnupg \
   lsb-release ~~~
   ```
3. `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`
4. ```echo \
   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null ~~~
   Trocar $(lsb_release -cs) por nome da distribuição (principal) caso seja uma distribuição secundária
   ```
5. `sudo apt-get update`
6. `sudo apt-get install docker-ce docker-ce-cli containerd.io`
7. Escolher uma versão a partir de:
   `apt-cache madison docker-ce`
   Versão escolhida: **5:20.10.6~3-0~ubuntu-bionic**

8. Substituir versão em:
   `sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io`
   Substituída: `sudo apt-get install docker-ce=5:20.10.6~3-0~ubuntu-bionic docker-ce-cli=5:20.10.6~3-0~ubuntu-bionic containerd.io`
9. Testar se está ok com:
   `sudo docker run hello-world`
   Deve aparecer mensagem: **Hello from Docker!**

## Passos depois de instalar

1. `sudo groupadd docker`
2. `sudo usermod -aG docker $USER`v
