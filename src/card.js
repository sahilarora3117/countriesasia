import React from 'react'

export default function (props) {
    return (
        <div>
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src={props.flag} />
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        {props.countryName} - {props.capital}
                    </h1>

                </header>
                <h2 class="text-md leading-tight p-2 md:p-4">
                    {props.region} - {props.subregion}
                </h2>
                <div class="leading-tight p-2 md:p-4">
                    <h2 class="text-md p-2">
                        Borders
                    </h2>
                    {props.borders.map((b) => (
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1">
                            {b}
                        </span>
                    ))}
                </div>

                <div class="leading-tight p-2 md:p-4">
                    <h2 class="text-md p-2">
                        Languages
                    </h2>
                    {props.languages.map((b) => (
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                            {b.name}
                        </span>
                    ))}
                </div>

            </article>


        </div>
    )
}
