Bun.listen({
    hostname: "localhost",
    port: 8080,
    socket: {
        open(socket) {
            socket.write("hello world")
        },
        data(socket, data) {
            console.log(data instanceof Uint8Array) // true
        },
        drain(socket) {
            console.log("gimme more data")
        },
        close(socket) {
            console.log("goodbye!")
        },
    },
    // This is a TLS socket
    // certFile: "/path/to/cert.pem",
    // keyFile: "/path/to/key.pem",
})


/* The client
Bun.connect({
    hostname: "localhost",
    port: 8080,

    socket: {
        open(socket) {
            socket.write("hello server, i'm the client!")
        },
        data(socket, message) {
            socket.write("thanks for the message! Sincerely, " + socket.data.name)
        },
        drain(socket) {
            console.log("my socket is ready for more data")
        },
        close(socket) {
            console.log("")
        },
        timeout(socket) {
            console.log("socket timed out")
        },
    },

    data: {
        name: "Clienty McClientface",
    },
})  */