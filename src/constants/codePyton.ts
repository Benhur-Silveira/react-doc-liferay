export const codePyton = `import os
import shutil
import time
from datetime import datetime

def monitorar_pasta(origem: str, destino: str, intervalo: int = 2):
    if not os.path.exists(origem):
        os.makedirs(origem)
    if not os.path.exists(destino):
        os.makedirs(destino)

    arquivos_existentes = set()
    print(f"Monitorando a pasta: {origem}")

    while True:
        time.sleep(intervalo)
        arquivos_atuais = set()

        # Percorre todos os diretórios e subdiretórios
        for dirpath, _, filenames in os.walk(origem):
            for filename in filenames:
                if filename.endswith('.jar'):
                    caminho_completo = os.path.join(dirpath, filename)
                    arquivos_atuais.add(caminho_completo)

        novos_arquivos = arquivos_atuais - arquivos_existentes

        for caminho_origem in novos_arquivos:
            nome_arquivo = os.path.basename(caminho_origem)
            caminho_destino = os.path.join(destino, nome_arquivo)

            try:
                shutil.move(caminho_origem, caminho_destino)
                os.system('cls' if os.name == 'nt' else 'clear')
                print(f"Arquivo movido: {nome_arquivo} -> [{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}]")
            except Exception as e:
                print(f"Erro ao mover {nome_arquivo}: {e}")

        arquivos_existentes = arquivos_atuais

if __name__ == "__main__":
    pasta_origem = r"C:\\Users\\caminho pasta modules"
    pasta_destino = r"C:\\Users\\caminho pasta deploy"
    monitorar_pasta(pasta_origem, pasta_destino)
`;
