<template>
    <div class="Country">
        <select @change="selectCountry">
            <option @click="allCountries">Все страны</option>
            <option
                v-for="film in countries"
                :key="film.id"
            >
                {{ film.country }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "Countries",
    data() {
        return {
            countries: [
                {country: "Россия", id: "RS"},
                {country: "СССР", id: "USSR"},
                {country: "Австралия", id: "AUS"},
                {country: "Великобритания", id: "GB"},
                {country: "Германия", id: "GRM"},
                {country: "Гонконг", id: "HN"},
                {country: "Канада", id: "CND"},
                {country: "Мексика", id: "MX"},
                {country: "США", id: "USA"},
                {country: "Франция", id: "FR"},
                {country: "Япония", id: "JPN"},
            ]
        }
    },
    methods: {
        selectCountry(event) {
            this.$emit("takeCountry", event.target.value)
        },
        allCountries() {
            this.$emit("takeAllCountries",'Все страны')
        }
    }
}
</script>
<style scoped>
select{
    background: #15172b;
    color: white;
    border-radius:10px;
    border: 1px solid black;
    padding: 1em 1.5em 10px;
    min-width: 230px;
    min-height: 30px;
    margin-top: 20px;

}
</style>


