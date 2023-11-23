class Heroi{
    constructor(name, age, heroType,life, attackType){
        this.name=name
        this.age=age
        this.heroType=heroType
        this.life=life
        this.attackType=attackType
    }
    AttackMethod(){
        console.log(`O ${this.heroType} atacou usando ${this.attackType}`)
    }
}

let HeroiMago= new Heroi("Gandalf", 10, "Mago" ,5, "Magia")
let HeroiGuerreiro= new Heroi("Aragorn", 10, "Guerreiro",10,"espada")
let HeroiNinja= new Heroi("Ayame", 10, "Ninja",5,"shuriken")
let HeroiMonge= new Heroi("Dalai-Lama", 10, "Monge",5,"artes marciais")
let HeroiDruida= new Heroi("Nightwish", 10, "Druida",5,"Poder da Natureza")

HeroiNinja.AttackMethod()