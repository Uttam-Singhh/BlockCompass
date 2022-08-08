echo "[x] start mongodb replicaset"
docker-compose -f docker-compose-mongo-replicaset.yml up -d
sleep 5
echo "[x] initiate replicaset"
mongo --host "132.207.170.32:27011"<<EOF

rs.initiate(
   {
     _id : 'rs0',
     members: [
       { _id : 0, host : "132.207.170.32:27011" },
       { _id : 1, host : "132.207.170.32:27012" },
       { _id : 2, host : "132.207.170.32:27013" }
     ]
   }
 )
EOF

