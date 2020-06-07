import Knex from 'knex';

export async function up(knex: Knex){// Diz que a variável knex vai ter o mesmo tipo que a Knex
    //CRIAR A TABELA

    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable().references('id').inTable('points'); //Cria um id da tabela e uma chave estrangeira na tabela points
        table.integer('item_id').notNullable().references('id').inTable('items'); 
    });
}

export async function down(knex: Knex){
    knex.schema.dropTable('point_items');
}