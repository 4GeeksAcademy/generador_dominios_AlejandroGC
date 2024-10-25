let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon','internet'];
let extensions = ['.com', '.io', '.us', '.net']

function domainGenerator(pro, adj, name, ext) {
    let domain_length = 0;
    let domain_no_dots = "";
    let name_word_final = "";
    let shorted_name = "";

    for (let index1 in pro){
        for (let index2 in adj){
            for (let index3 in name){
                for (let index4 in ext){
                    domain_length = ext[index4].length-1;
                    name_word_final = name[index3].slice(name[index3].length-domain_length);
                    domain_no_dots = ext[index4].slice(1);

                    if (domain_no_dots === name_word_final){
                        shorted_name = name[index3].slice(0,name[index3].length-domain_length);
                        console.log(pro[index1]+adj[index2]+shorted_name+ext[index4]);
                    } else {
                        console.log(pro[index1]+adj[index2]+name[index3]+ext[index4]);
                    }
                }
            }
        }
    }


    return null;
}

domainGenerator(pronoun,adj,noun,extensions)