<template>
   <div class="home">
      <h1 class="filter-name">All Categories</h1>
      <div class="card" v-for="category in categories" :key="category.index">
         <category-card v-bind:category="category" />
      </div>
   </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard";
import { inject } from "vue";

// import * as Realm from "realm-web";

export default {
   components: {
      CategoryCard,
   },
   setup() {
      //       const appId = "shopme-xkixa"; // Set Realm App ID here.
      //       const appConfig = {
      //         id: appId,
      //         timeout: 10000, // timeout in number of milliseconds
      //       };
      //       async function run() {
      //         let user;
      //         try {
      //           const app = new Realm.App(appConfig);
      //           // an authenticated user is required to access a MongoDB instance
      //           user = await app.logIn(Realm.Credentials.anonymous());
      //           const mongo = app.currentUser.mongoClient("mongodb-atlas");
      //           const mongoCollection = mongo.db("einkaufsliste").collection("liste");
      //           console.log(mongoCollection);
      //          //   mongoCollection.insert( items )
      //           const query = { "name": "Banana" };
      //           await mongoCollection.findOne(query).then((result) => console.log(result));
      //     console.log(mongo.db("einkaufsliste"));
      //          //  const allItems = await
      //         mongoCollection.find({}).then((result) => console.log(result)).catch((err) => console.log("da ging was schief " + err));
      //          //  console.log(allItems)
      //           // the rest of your code ...
      //          } finally {
      //            console.log(user);
      //          }
      //        }
      //        run().catch(console.dir);

      //  fetch('https://cloud.mongodb.com/api/atlas/v1.0/groups/5e96c7755faeeb18879dab04/clusters/Cluster0/fts/indexes/einkaufsliste/liste', {
      //   method: "GET",
      //   headers: {"Content-type": "application/json"}
      // }).then(response => console.log(response))
      //   .then(data => console.log(data)).catch((err) => console.log(err));

      //    const {
      //     Stitch,
      //     RemoteMongoClient,
      //     AnonymousCredential
      // } = require('mongodb-stitch-browser-sdk');

      // const client = Stitch.initializeDefaultAppClient('shopme-xkixa');

      // const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('einkaufsliste');

      // client.auth.loginWithCredential(new AnonymousCredential()).then(() =>
      //   db.collection('liste').find().toArray()
      // ).then(docs => {
      //     console.log("Found docs", docs)
      //     console.log("[MongoDB Realm] Connected to Realm")
      // }).catch(err => {
      //     console.error(err)
      // });

      let items = inject("items");

      let categories = items.value.map((item) => item.category);
      categories = new Set(categories);

      return { items, categories };
   },
};
</script>

<style scoped>
.home {
   height: 100%;
   width: 100%;
}
.category_item {
   background: linear-gradient(30deg, rgb(253, 207, 207), rgb(140, 140, 236));
   padding: 6rem;
}

.card {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 25px 25px 15px;
}

.filter-name {
   font-weight: 700;
   font-size: 24px;
   text-align: left;
   padding: 20px 25px 0;
}
</style>
