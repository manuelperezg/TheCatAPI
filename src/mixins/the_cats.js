import axios from "axios";

export const cats = {
    data() {
        return {
            API_URL:'https://api.thecatapi.com/v1/',
            api_key: '4d798a51-42ad-49e1-b89d-6afa753ee6db',
            categories: [],
            breeds: [],
            images: [],
            order: "Asc",
            page: 1,
            limit: 15,
            pagination_count: 0
        }
    },
    created () {
        axios.defaults.headers.common["x-api-key"] = this.api_key;
    },
    methods: {
        async nextBtn() {
            this.page++;
            await this.getImages('');
        },
        async getCategories() {
            try {
                
                let response = await axios.get(this.API_URL+'categories/')
                this.categories = response.data;

            } catch (err) {
                console.log(err)
            }
        },
        async getImages(query) {
            try {
           
                let query_params = {
                    limit: this.limit,
                    order: this.order,
                    page: this.page - 1
                };
                let response = await axios.get(
                    this.API_URL+"images/search?"+query,
                    { params: query_params }
                );

                this.pagination_count = response.headers["pagination-count"];
                this.images = response.data;
             
            } catch (err) {
                consobreedsle.log(err);
            }
        },
        async getBreeds(){
            try {
                
                let response = await axios.get(this.API_URL+'breeds/')
                this.breeds = response.data;
                
            } catch (err) {
                console.log(err);
                
            }

        }
    }
}