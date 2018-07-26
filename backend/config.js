const config = {
    dbUri: "mongodb://localhost:27017/twitshow",
    backendUri: "http://localhost:3001/"
}

export const getConfig = key => config[key];