import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import List from "../components/List";
import Breaker from "../components/Breaker";
import LargeButton from "../components/LargeButton";

function Cell({ value }) {
  return (
    <div>
      <p>{value}</p>
    </div>
  );
}

export default function Kurssitarjotin() {
  return (
    <div className="bg-nord0 h-full min-h-screen space-y-8">
      <Head>
        <title>Porin Lukio - Kurssitarjotin 22</title>
        <meta
          name="description"
          content="Porin Lukion (epä)viralliset kotisivut"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="font-sans space-y-8">
        <Header />
        <div className="px-8 flex justify-center text-nord4">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold flex justify-center">
              Kurssitarjotin 22
            </h1>
            <div className="space-y-8">
              <p>Tuntikiertokaavio</p>
              <div className="grid grid-cols-6 grid-rows-6 gap-4">
                <p>Tunti</p>
                <p>Ma</p>
                <p>Ti</p>
                <p>Ke</p>
                <p>To</p>
                <p>Pe</p>

                <p>08:30-09:45</p>
                <p>27</p>
                <p></p>
                <p>21</p>
                <p>22</p>
                <p>21</p>

                <p>10:05-11:20</p>
                <p>25</p>
                <p>22</p>
                <p>22</p>
                <p>23</p>
                <p>23</p>

                <p>11:45-13:15</p>
                <p>24</p>
                <p>25</p>
                <p>24</p>
                <p>25</p>
                <p>24</p>

                <p>13:30-14:45</p>
                <p>21</p>
                <p>26</p>
                <p>26</p>
                <p>27</p>
                <p>26</p>

                <p>14:50-16:15</p>
                <p>21</p>
                <p>28, 28 ti</p>
                <p>27</p>
                <p>28, 28 to</p>
                <p>28, 28 to</p>
              </div>
            </div>
            <div className="space-y-8 w-[56rem]]">
              <p>Kurssitarjotin</p>
              <div className="relative h-96">
                <Image
                  src="/kurssitarjotin/1.bmp"
                  layout="fill"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                />
              </div>
              <div className=" relative h-64">
                <Image
                  src="/kurssitarjotin/2.bmp"
                  layout="fill"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/kurssitarjotin/3.bmp"
                  layout="fill"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <Breaker />
        <Footer />
      </div>
    </div>
  );
}

// test commit
