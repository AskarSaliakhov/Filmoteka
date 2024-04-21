<template>
    <div class="ChooseFormat">
        <div class="container">
            <p id="title">Выберите какой формат теста хотите пройти</p>
            <div class="modals">
                <div class="description__king">
                    <p id="title--format">Турнир: Царь горы</p>
                    <ul>
                        <li>Прохождение разбито на раунды;</li>
                        <li>Каждый раунд вам на выбор предлагается два случайных варианта;</li>
                        <li>При выборе одного из вариантов он переходит в следующий раунд, а его противник вылетает;</li>
                        <li>Таким образом выигравший вариант сразу сталкивается с новым противником;</li>
                        <li>По итогу всех выборов, последний оставшийся на поле вариант выигрывает;</li>
                    </ul>
                    <div class="buttons">
                        <button id="btn--king" @click="redirectToKing">Выбрать "Царь горы"</button>
                    </div>
                </div>
                <div class="description__play__offs">
                    <p id="title--format"> Турнир: Плей-офф</p>
                    <ul>
                        <li>Каждый раунд вам на выбор предлагается два случайных варианта, участвующих в этапе;</li>
                        <li> При выборе одного из вариантов он переходит в следующий этап, а его противник вылетает;</li>
                        <li>Новый этап начинается, когда все варианты, попавшие в него были рассмотрены и осталась половина;</li>
                        <li>Таким образом каждый этап отсеивает половину вариантов, пока не останется один - победитель;</li>
                    </ul>
                    <div class="buttons">
                        <button id="btn--po" @click="redirectToPlayOff">Выбрать "Плей-офф"</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChooseFormat",
    methods: {
        redirectToKing() {
            this.$router.push('/voting/KingOfMountain')
        },
        redirectToPlayOff() {
            this.$router.push('/voting/PlayOffs')
        }
    }
}
</script>

<style scoped>
.ChooseFormat {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
}

.modals {
    display: flex;
    gap: 30px;
    margin-top: 50px;
}

.description__king, .description__play__offs {
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border: 2px solid white;
    border-radius: 10px;
}

p {
    font-size: 20px;
    text-align: center;
    color: white;
    margin-bottom: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    font-size: 18px;
    color: white;
}

.buttons {
    display: flex;
    justify-content: center;
}

button {
    width: 200px;
    height: 40px;
    background-color: gray;
    border: none;
    cursor: pointer;
    font-family: cursive;
    border-radius: 10px;
    transition: transform 0.5s;
    margin-top: 10px;
}

button:hover {
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .modals {
        flex-direction: column;
        align-items: center;
    }

    .description__king, .description__play__offs {
        max-width: 90%;
    }

    button {
        width: 150px;
        font-size: 16px;
    }
}
#btn--po{
    margin-top: 30px;
}

@media (max-width: 500px) {
    .description__king, .description__play__offs {
        max-width: 90%;
    }

    button {
        margin-top: 10px;
        width: 150px;
        height: 50px;
    }
}

</style>
