<?php
namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class Address extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cep',
        'city',
        'district',
        'address',
        'residence_number',
        "state_id",
        "contact_id"
    ];

    protected $hidden = [
        "id",
        "state_id",
        "contact_id"
    ];

    public function state()
    {
        return $this->belongsTo(State::class, "state_id");
    }
}
