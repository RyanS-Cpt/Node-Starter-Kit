const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	console.log("Root is working");
	res.send("Hello world, my name is Ryan");
});

const albumsData = [
	{
		albumId: "10",
		artistName: "Beyoncé",
		collectionName: "Lemonade",
		artworkUrl100:
			"http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
		releaseDate: "2016-04-25T07:00:00Z",
		primaryGenreName: "Pop",
		url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
	},
	{
		albumId: "11",
		artistName: "Beyoncé",
		collectionName: "Dangerously In Love",
		artworkUrl100:
			"http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
		releaseDate: "2003-06-24T07:00:00Z",
		primaryGenreName: "Pop",
		url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
	},
	{
		albumId: "12",
		artistName: "Beyoncé",
		collectionName: "I Am... Sasha Fierce",
		artworkUrl100:
			"https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png",
		releaseDate: "2008-11-12T07:00:00Z",
		primaryGenreName: "Pop",
		url: "https://www.youtube.com/playlist?list=PL8AC872D0F225EE17",
	},
];

app.get("/albums", function (req, res) {
	res.send(albumsData);
});

app.get("/albums/:albumId", (req, res) => {
	const { albumId } = req.params;
	console.log(albumId);
	if (albumsData.some((album) => album.albumId === albumId)) {
		const foundAlbum = albumsData.find((album) => album.albumId === albumId);
		res.send(foundAlbum);
	} else {
		res.status(404).json({ Err: `No album with id:${albumId} found` });
	}
});

app.post("/albums", (req, res) => {
	const newAlbum = req.body;

	albumsData.push(newAlbum);

	res.send(albumsData);
});

app.delete("/albums/:albumId", (req, res) => {
	const { albumId } = req.params;

	if (albumId) {
		const filteredAlbums = albumsData.filter(
			(album) => album.albumId !== albumId
		);
		res.status(200).json({ success: "true", filteredAlbums });
	}
});

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
