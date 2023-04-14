terraform {
  required_providers {
    linode = {
      source  = "linode/linode"
      version = "1.27.1"
    }
    mysql = {
      source  = "petoju/mysql"
      version = "3.0.30"
    }
  }
}

provider "linode" {
  token = var.linode_token
}
