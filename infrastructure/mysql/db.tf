

resource "linode_database_mysql" "mariokart-leaderboard" {
  label          = "mariokart-leaderboard"
  engine_id      = "mysql/8.0.26"
  region         = "ap-southeast"
  type           = "g6-nanode-1"
  allow_list     = ["220.245.113.214/32", "193.116.209.48/32", "180.150.36.8/32"]
  ssl_connection = true
}
# terraform import linode_database_mysql.mariokart-leaderboard 15150
