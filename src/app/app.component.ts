import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `

    <div className="w-96">
      <form>
        <div class="mb-4 text-center">
          <img src="../assets/logo.png" alt="logo pederiva" class="mx-auto"/>
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="username"/>
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="text"
            placeholder="password"/>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            name="sendData">
            Submit
          </button>
        </div>
      </form>
    </div>
    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'pederivaland';
}
