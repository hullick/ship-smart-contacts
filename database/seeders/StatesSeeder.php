<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\State;

class StatesSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        State::create([
            'name' => "Acre",
            'acronym' => "AC"
        ]);
        State::create([
            'name' => "Alagoas",
            'acronym' => "AL"
        ]);
        State::create([
            'name' => 'Amap�',
            'acronym' => "AP"
        ]);
        State::create([
            'name' => "Amazonas",
            'acronym' => "AM"
        ]);
        State::create([
            'name' => "Bahia",
            'acronym' => "BA"
        ]);
        State::create([
            'name' => "Cear�",
            'acronym' => "CE"
        ]);
        State::create([
            'name' => "Par�",
            'acronym' => "PA"
        ]);
        State::create([
            'name' => "Pernambuco",
            'acronym' => "PE"
        ]);
        State::create([
            'name' => "Distrito Federal",
            'acronym' => "DF"
        ]);
        State::create([
            'name' => "Esp�rito Santo",
            'acronym' => "ES"
        ]);
        State::create([
            'name' => "Goi�s",
            'acronym' => "GO"
        ]);
        State::create([
            'name' => "Maranh�o",
            'acronym' => "MA"
        ]);
        State::create([
            'name' => "Mato Grosso",
            'acronym' => "MT"
        ]);
        State::create([
            'name' => "Mato Grosso do Sul",
            'acronym' => "MS"
        ]);
        State::create([
            'name' => "Para�ba",
            'acronym' => "PB"
        ]);
        State::create([
            'name' => "Paran�",
            'acronym' => "PR"
        ]);
        State::create([
            'name' => "Piau�",
            'acronym' => "PI"
        ]);
        State::create([
            'name' => "Rio Grande do Norte",
            'acronym' => "RN"
        ]);
        State::create([
            'name' => "Rio Grande do Sul",
            'acronym' => "RS"
        ]);
        State::create([
            'name' => "Minas Gerais",
            'acronym' => "MG"
        ]);
        State::create([
            'name' => "Rio de Janeiro",
            'acronym' => "RJ"
        ]);
        State::create([
            'name' => "Rond�nia",
            'acronym' => "RO"
        ]);
        State::create([
            'name' => "Santa Catarina",
            'acronym' => "SC"
        ]);
        State::create([
            'name' => "Sergipe",
            'acronym' => "SE"
        ]);
        State::create([
            'name' => "S�o Paulo",
            'acronym' => "SP"
        ]);
        State::create([
            'name' => "Tocantins",
            'acronym' => "TO"
        ]);
        State::create([
            'name' => "Roraima",
            'acronym' => "RR"
        ]);
    }
}
