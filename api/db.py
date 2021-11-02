from peewee import PostgresqlDatabase

DATABASE = PostgresqlDatabase('gs_canvas_db')

def initialize(tables):
    DATABASE.connect()
    DATABASE.create_tables(tables, safe=True)
    print("Some tables were created!")
    DATABASE.close()