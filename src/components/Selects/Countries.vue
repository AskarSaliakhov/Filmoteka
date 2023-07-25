<template>
    <div class="Country">
        <select>
            <option @click="allCountries">Все страны</option>
            <option
                v-for="film in countries"
                :key="film.id"
                @click="selectCountry(film)"
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
        selectCountry(film) {
            this.$emit("takeCountry", film.country)
        },
        allCountries() {
            this.$emit("takeAllCountries")
        }
    }
}
</script>
<style scoped>
select{
    padding: 1em 1.5em;
    background: #15172b;
    color: white;
    border-radius:10px;
    border: 1px solid black;
    padding-bottom: 10px;
    width: 200px;
    margin-top: 20px;
}
</style>


