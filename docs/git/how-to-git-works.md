---
sidebar_position: 1
title: How to git work?
comment: true
tags:
  - Git
---

```mermaid
sequenceDiagram
    box Local
    participant Working Directory
    participant Staging Area
    participant Local Repo
    end
    box Remote
    participant Remote Repo
    end
    Working Directory->>Staging Area: git add
    Staging Area->>Local Repo: git commit
    Local Repo->>Remote Repo: git push
    Remote Repo->>Local Repo: git fetch
    Local Repo->>Working Directory: git merge
    Remote Repo->>Working Directory: git pull
    Remote Repo->>Local Repo: git clone
    Local Repo->>Working Directory: git checkout
```

:::info
Working directory: where we edit files

Staging area: a temporary location where files are kept for the next commit

Local repository: contains the code that has been committed

Remote repository: the remote server that stores the code (github, gitlab, bitbucket)
:::
