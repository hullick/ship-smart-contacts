<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string("cep", 9);
            $table->string("city", 75);
            $table->string("district", 75);
            $table->string("address", 75);
            $table->string("residence_number", 10);

            $table->foreignId("states_id")->constrained("states");
            $table->foreignId("contact_id")->constrained("contacts");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('address');
    }
}
