(() => {

    const vm = new Vue({
        el : "#app",
        
        data : {
            welcomemessage : "Chiggity check it",

            videodata : [],
            singledata : [],

            videotitle : "",
            videodescription : "",
            videosource : "",

            showDetails : false
        },

        created : function() {
            //get all the movie data on page load
            this.fetchMovieData(null);  
        },

        methods : {
            login() {
                //stub
                console.log("login functionality");
            },

            fetchSingle(e) {
                this.fetchMovieData(e.currentTarget.dataset.movie);
            },

            loadMovie(e) {
                // debugger;
                e.preventDefault(); //block a page reload

                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.videodata.filter(video => video.vid_path === dataKey);

                this.videotitle = currentData[0].vid_name;
                this.videodescription = currentData[0].vid_desc;
                this.videosource = dataKey;

                this.showDetails = true;

                setTimeout(function(){ window.scrollTo(0, 1200)}, 500);
            },
        

            fetchMovieData(movie) {
                // this is a ternary statement (shorthand if/else). left of colon is true, right is false
                let url = movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';

                fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (movie) {
                        //store data in the result above
                        this.singledata = data;
                    } else {
                        // initial data grab, store in the videodata array
                        this.videodata = data;
                    }

                })

                .catch(function(error) {
                    console.log(error);
                });
            }
        }

    });

})();