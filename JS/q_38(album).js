function make_album(artist, album_title, track_no) {
    this.artist = artist;
    this.album_title = album_title;
    this.track_no = track_no;
    if (typeof track_no !== 'undefined') {
        console.log("Artist: " + this.artist);
        console.log("Album: " + this.album_title);
        console.log("Track no: " + this.track_no);
    }
    else {
        console.log("Artist: " + this.artist);
        console.log("Album: " + this.album_title);
    }
}
make_album("Dummy", "Hello World", 2321233);
make_album("Dummy", "Hello World");
