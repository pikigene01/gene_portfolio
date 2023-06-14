import React from 'react'

export default function Footer() {
  return (
    <div>
           <footer class="pt-30 pb-30">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-12">
                        <p class="copy pt-30">
                            Gene Piki &copy; {new Date().getFullYear()}. All Right Reserved, Synchronise IT.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
