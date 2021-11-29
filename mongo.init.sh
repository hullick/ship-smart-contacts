set -e

mongo <<EOF
use '$MONGO_INITDB_DATABASE';
db.$MONGO_INITDB_DATABASE.dummy.insert({x:1})

db.createUser({
  user: '$MONGO_NON_ROOT_USERNAME',
  pwd: '$MONGO_NON_ROOT_PASSWORD',
  roles: [
    {
      role: 'readWrite',
      db: '$MONGO_INITDB_DATABASE',
    },
  ],
});
