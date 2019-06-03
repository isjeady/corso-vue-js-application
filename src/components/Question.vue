<template>
    <div>
        <!-- Viewing the question. -->
        <div v-if="! editing">
            <h1 id='lbltitle' v-text="question.title"></h1>
            <div  id='lblbody' class="body" v-text="question.body"></div>

            <button id="edit" @click="editing = true">Edit</button>
        </div>

        <!-- Editing the question. -->
        <div v-if="editing">
            <input type="text" name="title" v-model="form.title">
            <textarea name="body" v-model="form.body"></textarea>

            <button id="cancel" @click="cancel">Cancel</button>
            <button id="update" @click="update">Update</button>
        </div>

        <div v-if="success">Aggiornato con successo...</div>
        <div v-if="error">Errore di Sistema...</div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        props: ['dataQuestion'],
        data () {
            return {
                question: this.dataQuestion,
                form: {
                    title: this.dataQuestion.title,
                    body: this.dataQuestion.body,
                },
                editing: false,
                success: false,
                error: false
            };
        },
        methods: {
            cancel () {
                this.editing = false;
            },
            update () {
                console.log('UPDATE');
            
                axios.post('questions/1',this.form).then(({data}) => {
                    console.log(data.success);
                    if(data.success){
                        this.success = true;
                        this.question.title = this.form.title;
                        this.question.body = this.form.body;
                    }
                }).catch((error) => {
                    this.error = true;
                });
                
                this.editing = false;
            }
        }
    }
</script>