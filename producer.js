const Kafka = require("kafkajs").Kafka
const msg = process.argv[2]
run();

async function run() {
    try {
        const kafka = new Kafka({
            "clientId":  "kafkaApp",
            "brokers": ["macbook-02.local:9092"]
        })

        const producer = kafka.producer();

        console.log("connecting..")
        await producer.connect()
        console.log("connected")
        //before n, sort to part 0
        const partition = msg[0] < "N" ? 0 : 1;

        const result = await producer.send({
            "topic": "Users",
            "messages": [
                {
                    "value": msg,
                    "partition": partition
                }
            ]
        }) 
        console.log(`success ${JSON.stringify(result)}`)

        await producer.disconnect();
        
    }

    catch(ex) {
        console.error(`something went wrong ${ex}`)
    }

    finally {
        process.exit(0)
    }
}