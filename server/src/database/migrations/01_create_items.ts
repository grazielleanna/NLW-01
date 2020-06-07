import Knex from 'knex';

export async function up(knex: Knex){// Diz que a variável knex vai ter o mesmo tipo que a Knex
    //CRIAR A TABELA

    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable(); 
        table.string('title').notNullable(); 
    });
}

export async function down(knex: Knex){
    knex.schema.dropTable('items');
}