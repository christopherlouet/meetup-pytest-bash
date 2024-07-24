---
theme: seriph
#background: https://cover.sli.dev
background: https://secure.meetupstatic.com/photos/event/3/b/8/5/600_522255237.webp?w=750
title: Écrivez les tests unitaires de vos scripts bash avec pytest 
class: text-center
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
mdc: true
hideInToc: true
---

# Django Rennes art, Bashville swing

Écrivez les tests unitaires de vos scripts bash avec pytest

---
transition: slide-left
hideInToc: true
---

# Sommaire

<Toc minDepth="1" maxDepth="2"></Toc>


---
transition: slide-left
---

# Présentation du projet ecoCode

Réduire l'impact environnemental et social des solutions numériques.

- 🌿 Green code initiative
- 🧩 Plugins SonarQube
- ☕ Projet ecoCode-java
- 🔨 docker compose et Dockerfile
- 🔧 Toolbox

---
transition: slide-left
---

# Pytest et le plugin pytest-shell-utilities

Objectif : utiliser pytest pour lancer les tests unitaires d'un script bash.

2 plugins de disponibles sur PyPi :

- pytest-shell
- **pytest-shell-utilities**

Fonctionnalités attendues :

- Tester le code retour
- Récupérer la sortie standard
- Récupérer la sortie erreur

Utilisation du module **subprocess** pour exécuter la commande et récupérer le résultat.

---
transition: slide-left
---

# Prérequis à ajouter au script

## 

toolbox.sh

```shell {monaco}
function main() {
    ARGS=() TEST=0
    # ...
    if [[ $TEST -gt 0 ]]; then
        execute_unit_test
        return $?
    fi
    # ...
    return 0
}
function execute_unit_test() {
    if [[ -z "${ARGS[0]}" ]]; then
        error "No function to execute" && return 1
    fi
    # If a function is passed as the first argument, we check that it exists
    if ! [[ $(type -t "${ARGS[0]}") == function ]]; then
        error "Function with name ${ARGS[0]} does not exist" && return 2
    fi
    # Initialize fixtures
    [[ $FIXTURE -eq 1 ]] && ECOCODE_DOCKER_ENV="test_docker_env"
    # execute function
    "${ARGS[@]}"
    return $?
}
```

---
transition: slide-left
---

# Démo script toolbox.sh

##

Exécuter la fonction sans l'option **--test**

```shell {monaco}
./toolbox.sh info "test" 
Usage toolbox.sh [OPTIONS] COMMAND
# ...
echo $?
0
```

Exécuter la fonction avec l'option **--test**

```shell {monaco}
 ./toolbox.sh info "test" --test 
test
echo $?
0
```

Exécuter une fonction non définie avec l'option **--test**

```shell {monaco}
 ./toolbox.sh test1 --test 
Function with name test1 does not exist
echo $?
2
```

---
transition: slide-left
---

# Installation de l'environnement

Méthodes d'installation.

Sans Docker :

- python 3.12
- poetry
- maven
- java

Avec Docker :

- toolbox.Dockerfile
- utils.sh

---
transition: slide-left
---

# Présentation des tests unitaires du script toolbox.sh

tests/test_toolbox.py

Prérequis et import des modules

```shell {monaco}
import inspect
import os
import pytest

current_dir: str = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
if os.environ['HOME'] == "/app":
  current_dir = "/app/tests"
project_path: str = os.path.abspath(f"{current_dir}/..")
script: str = os.path.abspath(f"{current_dir}/../toolbox.sh")
```

Exemple de test unitaire

```shell {monaco}
def test_function_not_exist(shell):
  ret = shell.run(script, "test_function", "--test")
  assert ret.stderr.rstrip() == "Function with name test_function does not exist"
  assert ret.returncode == 2
```

---
transition: slide-left
---

# Explication des méthodes utilisés pour les tests

##

Récupérer le code retour du script bash

```shell {monaco}
ret.returncode
```

Vérifier la sortie standard

```shell {monaco}
ret.stdout
ret.stdout.rstrip()
ret.stdout.splitlines()[0]
```

Vérifier la sortie erreur

```shell {monaco}
ret.stderr
```

---
transition: slide-left
---

# Intégration d'un workflow github action pour exécuter les tests

.github/workflows/bash_tests.yml

- Installation de Python
- Installation de Poetry
- Installation des dépendances
- Exécution des tests

Remarque : gestion du cache pour la prochaine exécution de la pipeline dans github

---
transition: slide-left
---

# Conclusion

## 

Simplicité de mise en place du plugin, avec Poetry notamment.

Nécessite une petite adaptation du script shell pour pouvoir exécuter une fonction unitairement.

Plusieurs méthodes de disponibles avec le plugin pytest-shell-utilities pour récupérer :

- le code retour du script bash
- la sortie standard
- la sortie erreur

Tests unitaires facilement intégrables dans un workflow github action.
