import dns from "dns";
dns.resolveSrv('_mongodb._tcp.cluster0.ekxi4ts.mongodb.net', (err, addresses) => {
  if (err) {
    console.log('DNS Error:', err);
  } else {
    console.log('DNS OK:', addresses);
  }
});