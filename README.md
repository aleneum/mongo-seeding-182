# Minimal example for version issues of mongoose and mongo-seeder

The issue can be found [here](https://github.com/pkosiec/mongo-seeding/issues/182)

- node: v14.17.5
- npm: 6.14.14
- Mongoose: 6.0.4
- Mongo-seeding: 3.7.0
- Typescript: 4.4.2
## How to reproduce

```
git clone https://github.com/aleneum/mongo-seeding-182.git
cd mongo-seeding-182
npm install
npm run build
```

### Result

```typescript
node_modules/mongo-seeding/dist/config.d.ts:3:10 - error TS2305: Module '"mongodb"' has no exported member 'CollectionInsertManyOptions'.

3 import { CollectionInsertManyOptions, MongoClientOptions } from 'mongodb';
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/mongo-seeding/dist/database/database.d.ts:1:14 - error TS2305: Module '"mongodb"' has no exported member 'CollectionInsertManyOptions'.

1 import { Db, CollectionInsertManyOptions, MongoClient } from 'mongodb';
               ~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/mongo-seeding/dist/database/database.d.ts:32:167 - error TS2694: Namespace '"/home/alneuman/workspace/mongo-seeding-182/node_modules/mongodb/mongodb"' has no exported member 'InsertWriteOpResult'.

32     insertDocumentsIntoCollection(documentsToInsert: any[], collectionName: string, collectionInsertOptions?: CollectionInsertManyOptions): Promise<import("mongodb").InsertWriteOpResult<any>>;

                         ~~~~~~~~~~~~~~~~~~~

node_modules/mongo-seeding/dist/database/database.d.ts:55:93 - error TS2694: Namespace '"/home/alneuman/workspace/mongo-seeding-182/node_modules/mongodb/mongodb"' has no exported member 'DeleteWriteOpResultObject'.

55     removeAllDocumentsIfCollectionExists(collectionName: string): Promise<import("mongodb").DeleteWriteOpResultObject | undefined>;
```
